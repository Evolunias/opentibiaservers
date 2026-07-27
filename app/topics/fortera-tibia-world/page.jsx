import ForteraTibiaWorldKeywordPage, { generateMetadata } from './fortera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForteraTibiaWorldKeywordPage />;
}
