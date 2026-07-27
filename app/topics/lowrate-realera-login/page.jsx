import LowrateRealeraLoginKeywordPage, { generateMetadata } from './lowrate-realera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealeraLoginKeywordPage />;
}
