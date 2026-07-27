import LowrateTibianusClientKeywordPage, { generateMetadata } from './lowrate-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusClientKeywordPage />;
}
