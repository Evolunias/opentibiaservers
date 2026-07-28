import MyaacPage, { generateMetadata } from './myaac';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacPage />;
}
