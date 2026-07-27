import CustomEvoluniaWebsiteKeywordPage, { generateMetadata } from './custom-evolunia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaWebsiteKeywordPage />;
}
