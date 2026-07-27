import DoleraTibiaKeywordPage, { generateMetadata } from './dolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DoleraTibiaKeywordPage />;
}
