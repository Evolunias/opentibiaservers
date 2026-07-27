import DoleraTibiaWorldKeywordPage, { generateMetadata } from './dolera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DoleraTibiaWorldKeywordPage />;
}
