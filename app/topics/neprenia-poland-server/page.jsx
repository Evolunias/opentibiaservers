import NepreniaPolandServerKeywordPage, { generateMetadata } from './neprenia-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPolandServerKeywordPage />;
}
