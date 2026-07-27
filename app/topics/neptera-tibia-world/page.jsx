import NepteraTibiaWorldKeywordPage, { generateMetadata } from './neptera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepteraTibiaWorldKeywordPage />;
}
