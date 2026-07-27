import AlzeriaPage, { generateMetadata } from './alzeria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlzeriaPage />;
}
