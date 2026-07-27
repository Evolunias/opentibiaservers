import LowrateTibianusOtServerKeywordPage, { generateMetadata } from './lowrate-tibianus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusOtServerKeywordPage />;
}
