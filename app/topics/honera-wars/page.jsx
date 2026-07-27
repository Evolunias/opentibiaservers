import HoneraWarsKeywordPage, { generateMetadata } from './honera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HoneraWarsKeywordPage />;
}
