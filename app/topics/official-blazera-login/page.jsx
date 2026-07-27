import OfficialBlazeraLoginKeywordPage, { generateMetadata } from './official-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraLoginKeywordPage />;
}
