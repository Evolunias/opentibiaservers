import ForteraTibiaKeywordPage, { generateMetadata } from './fortera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForteraTibiaKeywordPage />;
}
