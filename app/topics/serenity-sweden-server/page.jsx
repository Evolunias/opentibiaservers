import SerenitySwedenServerKeywordPage, { generateMetadata } from './serenity-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenitySwedenServerKeywordPage />;
}
