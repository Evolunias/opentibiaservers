import SerenitySouthAmericaServerKeywordPage, { generateMetadata } from './serenity-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenitySouthAmericaServerKeywordPage />;
}
