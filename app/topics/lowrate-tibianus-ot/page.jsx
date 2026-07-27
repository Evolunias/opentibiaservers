import LowrateTibianusOtKeywordPage, { generateMetadata } from './lowrate-tibianus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusOtKeywordPage />;
}
