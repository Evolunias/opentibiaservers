import OfficialNostaltherOtKeywordPage, { generateMetadata } from './official-nostalther-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherOtKeywordPage />;
}
