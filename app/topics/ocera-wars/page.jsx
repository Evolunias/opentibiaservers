import OceraWarsKeywordPage, { generateMetadata } from './ocera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraWarsKeywordPage />;
}
