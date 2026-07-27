import JuleraTibiaWorldKeywordPage, { generateMetadata } from './julera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JuleraTibiaWorldKeywordPage />;
}
