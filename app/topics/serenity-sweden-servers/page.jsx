import SerenitySwedenServersKeywordPage, { generateMetadata } from './serenity-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenitySwedenServersKeywordPage />;
}
