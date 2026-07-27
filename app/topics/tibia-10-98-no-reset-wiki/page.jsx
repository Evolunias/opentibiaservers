import Tibia1098NoResetWikiKeywordPage, { generateMetadata } from './tibia-10-98-no-reset-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098NoResetWikiKeywordPage />;
}
