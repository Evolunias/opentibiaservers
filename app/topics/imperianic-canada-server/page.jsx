import ImperianicCanadaServerKeywordPage, { generateMetadata } from './imperianic-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicCanadaServerKeywordPage />;
}
