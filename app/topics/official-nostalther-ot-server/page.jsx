import OfficialNostaltherOtServerKeywordPage, { generateMetadata } from './official-nostalther-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNostaltherOtServerKeywordPage />;
}
