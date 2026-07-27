import NilotFranceServerKeywordPage, { generateMetadata } from './nilot-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotFranceServerKeywordPage />;
}
