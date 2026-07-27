import ImperianicSwedenServerKeywordPage, { generateMetadata } from './imperianic-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicSwedenServerKeywordPage />;
}
