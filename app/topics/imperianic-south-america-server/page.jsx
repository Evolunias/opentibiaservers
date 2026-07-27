import ImperianicSouthAmericaServerKeywordPage, { generateMetadata } from './imperianic-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicSouthAmericaServerKeywordPage />;
}
