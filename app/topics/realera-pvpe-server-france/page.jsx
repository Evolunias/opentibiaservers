import RealeraPvpeServerFranceKeywordPage, { generateMetadata } from './realera-pvpe-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraPvpeServerFranceKeywordPage />;
}
