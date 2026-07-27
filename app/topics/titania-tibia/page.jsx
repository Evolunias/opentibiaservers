import TitaniaTibiaKeywordPage, { generateMetadata } from './titania-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaTibiaKeywordPage />;
}
