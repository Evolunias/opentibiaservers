import TitaniaTibiaWorldKeywordPage, { generateMetadata } from './titania-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaTibiaWorldKeywordPage />;
}
