import LumineraWarsKeywordPage, { generateMetadata } from './luminera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraWarsKeywordPage />;
}
