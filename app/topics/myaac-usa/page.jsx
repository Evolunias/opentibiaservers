import MyaacUsaKeywordPage, { generateMetadata } from './myaac-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacUsaKeywordPage />;
}
