import BestOldSchoolTibiaServerKeywordPage, { generateMetadata } from './best-old-school-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOldSchoolTibiaServerKeywordPage />;
}
