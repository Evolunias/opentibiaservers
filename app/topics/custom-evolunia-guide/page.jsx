import CustomEvoluniaGuideKeywordPage, { generateMetadata } from './custom-evolunia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaGuideKeywordPage />;
}
