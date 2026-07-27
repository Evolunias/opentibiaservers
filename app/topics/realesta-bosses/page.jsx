import RealestaBossesKeywordPage, { generateMetadata } from './realesta-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaBossesKeywordPage />;
}
