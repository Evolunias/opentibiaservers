import CustomCoxaotOpenTibiaKeywordPage, { generateMetadata } from './custom-coxaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCoxaotOpenTibiaKeywordPage />;
}
