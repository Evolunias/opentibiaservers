import RuberaTibiaKeywordPage, { generateMetadata } from './rubera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaTibiaKeywordPage />;
}
