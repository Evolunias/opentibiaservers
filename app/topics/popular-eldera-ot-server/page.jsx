import PopularElderaOtServerKeywordPage, { generateMetadata } from './popular-eldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaOtServerKeywordPage />;
}
