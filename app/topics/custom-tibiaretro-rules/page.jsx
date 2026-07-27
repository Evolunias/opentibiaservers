import CustomTibiaretroRulesKeywordPage, { generateMetadata } from './custom-tibiaretro-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaretroRulesKeywordPage />;
}
