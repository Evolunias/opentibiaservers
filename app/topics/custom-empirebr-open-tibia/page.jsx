import CustomEmpirebrOpenTibiaKeywordPage, { generateMetadata } from './custom-empirebr-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrOpenTibiaKeywordPage />;
}
