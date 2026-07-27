import RealMapMidhemRegisterKeywordPage, { generateMetadata } from './real-map-midhem-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMidhemRegisterKeywordPage />;
}
