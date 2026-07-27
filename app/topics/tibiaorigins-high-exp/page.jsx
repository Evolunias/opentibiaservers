import TibiaoriginsHighExpKeywordPage, { generateMetadata } from './tibiaorigins-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsHighExpKeywordPage />;
}
