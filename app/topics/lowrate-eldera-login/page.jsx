import LowrateElderaLoginKeywordPage, { generateMetadata } from './lowrate-eldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaLoginKeywordPage />;
}
