import EleraWarsKeywordPage, { generateMetadata } from './elera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EleraWarsKeywordPage />;
}
