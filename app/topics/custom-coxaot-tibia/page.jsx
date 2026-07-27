import CustomCoxaotTibiaKeywordPage, { generateMetadata } from './custom-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCoxaotTibiaKeywordPage />;
}
