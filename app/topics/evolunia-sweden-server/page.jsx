import EvoluniaSwedenServerKeywordPage, { generateMetadata } from './evolunia-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaSwedenServerKeywordPage />;
}
