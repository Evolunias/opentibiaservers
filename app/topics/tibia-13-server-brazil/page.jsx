import Tibia13ServerBrazilKeywordPage, { generateMetadata } from './tibia-13-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerBrazilKeywordPage />;
}
