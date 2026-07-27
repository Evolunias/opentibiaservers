import RealestaTibiaKeywordPage, { generateMetadata } from './realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaTibiaKeywordPage />;
}
