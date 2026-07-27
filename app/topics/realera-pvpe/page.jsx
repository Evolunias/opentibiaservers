import RealeraPvpeKeywordPage, { generateMetadata } from './realera-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraPvpeKeywordPage />;
}
