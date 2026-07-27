import LiberaWarsKeywordPage, { generateMetadata } from './libera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LiberaWarsKeywordPage />;
}
