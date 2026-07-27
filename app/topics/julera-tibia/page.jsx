import JuleraTibiaKeywordPage, { generateMetadata } from './julera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JuleraTibiaKeywordPage />;
}
