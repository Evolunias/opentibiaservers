import LowrateBlazeraLoginKeywordPage, { generateMetadata } from './lowrate-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraLoginKeywordPage />;
}
