import Thaisborn74Page, { generateMetadata } from './thaisborn-7-4';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisborn74Page />;
}
